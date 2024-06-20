document.addEventListener('DOMContentLoaded', async () => {
    const email = 'u.atoev@innopolis.university';
    const idUrl = new URL('https://fwd.innopolis.university/api/hw2');
    idUrl.searchParams.append('email', email);

    try {
        const idResponse = await fetch(idUrl);
        if (!idResponse.ok) {
            throw new Error('Failed to fetch comic ID');
        }
        const comicId = await idResponse.json();

        const comicUrl = new URL('https://fwd.innopolis.university/api/comic');
        comicUrl.searchParams.append('id', comicId);

        const comicResponse = await fetch(comicUrl);
        if (!comicResponse.ok) {
            throw new Error('Failed to fetch comic');
        }
        const comicData = await comicResponse.json();

        document.getElementById('comic-title').textContent = comicData.safe_title || comicData.title;
        const comicImg = document.getElementById('comic-img');
        comicImg.src = comicData.img;
        comicImg.alt = comicData.alt;
        document.getElementById('comic-alt').textContent = comicData.alt;
        
        const comicDate = new Date(comicData.year, comicData.month - 1, comicData.day);
        document.getElementById('comic-date').textContent = comicDate.toLocaleDateString();

    } catch (error) {
        console.error('Error:', error);
    }
});
