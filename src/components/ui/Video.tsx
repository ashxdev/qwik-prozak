import { component$ } from "@builder.io/qwik"

export default component$(({ src, height = undefined, width = undefined }: { src: string, height?: number, width?: number }) => {
    return (
        <video controls height={height} width={width} preload="metadata" class="cursor-pointer">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
})