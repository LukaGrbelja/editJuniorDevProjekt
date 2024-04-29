function ExternalLink({ url, tekst }: externalLinkData) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {tekst}
        </a>

    );
}

export default ExternalLink;