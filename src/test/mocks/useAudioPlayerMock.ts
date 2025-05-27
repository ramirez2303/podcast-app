import { vi } from "vitest";

export const togglePlayMock = vi.fn();

vi.mock("@/hooks/useAudioPlayer", () => ({
    useAudioPlayer: () => ({
        audioRef: { current: null },
        isPlaying: false,
        togglePlay: togglePlayMock,
        currentTime: 0,
        duration: 120,
        handleSeek: vi.fn(),
        formatTime: (time: number) => `${time}s`,
    }),
}));

export default togglePlayMock;
