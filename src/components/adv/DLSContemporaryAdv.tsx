import Video from "~/components/ui/Video.tsx"

export default () => {
    return (
        <>
            <Video src="https://minio-console.simplesolution.guru/api/v1/buckets/dance-line-studio/objects/download?preview=true&prefix=videos%2Fcontemporary.mp4&version_id=null" />
            <caption></caption>
            <a target="_blank" href="https://dance-line.studio/"><h4>Студія танців - Dance Line Studio</h4></a>
        </>
    )
}