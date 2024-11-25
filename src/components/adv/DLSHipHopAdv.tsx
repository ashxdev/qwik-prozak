import Video from "~/components/ui/Video.tsx"

export default () => {
    return (
        <>
            <Video src="https://minio-console.simplesolution.guru/api/v1/buckets/dance-line-studio/objects/download?preview=true&prefix=videos%2Fhip-hop-kids.mp4&version_id=null" />
            <a target="_blank" href="https://dance-line.studio/"><h4>Студія танців - Dance Line Studio</h4></a>
            <a href="tel:095 086 9104" class="mt-10">
                Зателефонувати
            </a>
        </>
    )
}