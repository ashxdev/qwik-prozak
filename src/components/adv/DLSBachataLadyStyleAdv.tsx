import Video from "~/components/ui/Video.tsx"

export default ({ titleClass }: { titleClass?: string }) => {
    return (
        <>
            <Video src="https://minio-console.simplesolution.guru/api/v1/buckets/dance-line-studio/objects/download?preview=true&prefix=videos%2Fbachata-lady-style.mp4&version_id=null" />
            <caption></caption>
            <a target="_blank" class="text-white" href="https://dance-line.studio/"><h4 class={titleClass}>Бачата леді стайл - Dance Line Studio</h4></a>
            <a href="tel:095 086 9104" class="mt-10">
                Зателефонувати
            </a>
        </>
    )
}