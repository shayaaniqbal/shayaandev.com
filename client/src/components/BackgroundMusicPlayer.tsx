import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Play, Pause, Volume2, VolumeX, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackgroundVideoPlayerProps {
  youtubeUrl: string;
}

export default function BackgroundVideoPlayer({ youtubeUrl }: BackgroundVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [performanceMode, setPerformanceMode] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string): string => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v') || '';
  };

  const videoId = getVideoId(youtubeUrl);

  // Detect device performance capabilities
  const isLowEndDevice = useMemo(() => {
    return navigator.hardwareConcurrency <= 4 || window.innerWidth < 768;
  }, []);

  // YouTube iframe parameters optimized for performance
  const youtubeParams = useMemo(() => new URLSearchParams({
    autoplay: isVisible && !performanceMode ? '1' : '0',
    loop: '1',
    playlist: videoId,
    controls: '0',
    showinfo: '0',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    fs: '0',
    disablekb: '1',
    enablejsapi: '1',
    mute: '1',
    start: '0',
    end: '0',
    origin: window.location.origin,
    // Aggressive performance optimizations
    quality: performanceMode || isLowEndDevice ? 'tiny' : 'small',
    hd: '0',
    vq: performanceMode || isLowEndDevice ? 'tiny' : 'small',
    fmt: '18',
    playsinline: '1',
    cc_load_policy: '0',
    hl: 'en',
  }), [videoId, isVisible, performanceMode, isLowEndDevice]);

  const embedUrl = useMemo(() => 
    `https://www.youtube.com/embed/${videoId}?${youtubeParams.toString()}`,
    [videoId, youtubeParams]
  );

  // Performance optimization: auto-enable performance mode on slower devices
  useEffect(() => {
    if (isLowEndDevice) {
      setPerformanceMode(true);
    }
  }, [isLowEndDevice]);

  // Visibility observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle iframe load
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [embedUrl]);

  // Optimized YouTube command sender
  const sendYouTubeCommand = useCallback((command: string, args?: any[]) => {
    if (iframeRef.current && isLoaded && isVisible) {
      try {
        const message = JSON.stringify({
          event: 'command',
          func: command,
          args: args || []
        });
        iframeRef.current.contentWindow?.postMessage(message, 'https://www.youtube.com');
      } catch (error) {
        console.warn('YouTube command failed:', error);
      }
    }
  }, [isLoaded, isVisible]);

  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      sendYouTubeCommand('pauseVideo');
    } else {
      sendYouTubeCommand('playVideo');
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, sendYouTubeCommand]);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      sendYouTubeCommand('unMute');
    } else {
      sendYouTubeCommand('mute');
    }
    setIsMuted(!isMuted);
  }, [isMuted, sendYouTubeCommand]);

  const togglePerformanceMode = useCallback(() => {
    setPerformanceMode(!performanceMode);
    if (!performanceMode) {
      sendYouTubeCommand('pauseVideo');
      setIsPlaying(false);
    }
  }, [performanceMode, sendYouTubeCommand]);

  return (
    <>
      {/* Full-screen background video - optimized for performance */}
      <div ref={containerRef} className="fixed inset-0 w-full h-full z-0 overflow-hidden">
        {(!performanceMode || isPlaying) && (
          <iframe
            ref={iframeRef}
            src={embedUrl}
            className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Background Video"
            loading="lazy"
            style={{
              border: 'none',
              pointerEvents: 'none',
              filter: performanceMode ? 'blur(6px)' : 'blur(8px)',
              willChange: 'transform',
              transform: 'translate3d(-50%, -50%, 0) scale(1.1)',
              backfaceVisibility: 'hidden',
              imageRendering: 'auto' as const,
              opacity: 0.5,
            }}
          />
        )}
        
        {/* Strong bluish-purplish overlay matching website theme */}
        {performanceMode ? (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/75 via-purple-950/75 to-indigo-950/75 z-10" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-purple-950/70 to-indigo-950/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />
            <div className="absolute inset-0 bg-primary/8 z-10" />
          </>
        )}
      </div>

      {/* Performance-optimized floating controls */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayback}
          className="h-10 w-10 p-0 bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/10 shadow-lg"
          disabled={!isLoaded}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="h-10 w-10 p-0 bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/10 shadow-lg"
          disabled={!isLoaded}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={togglePerformanceMode}
          className="h-10 w-10 p-0 bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/10 shadow-lg"
          title={performanceMode ? "Disable Performance Mode" : "Enable Performance Mode"}
        >
          <Monitor size={18} className={performanceMode ? "text-green-400" : "text-primary"} />
        </Button>
      </div>
    </>
  );
}