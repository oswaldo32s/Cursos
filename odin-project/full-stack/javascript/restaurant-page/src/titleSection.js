function TitleSection(sectionName){
    //Create section
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section-title')
    sectionTitle.textContent = sectionName

    return sectionTitle
}

export default TitleSection