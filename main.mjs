import { setupEventListeners } from './interaction.mjs';
import { fetchData, createData, updateData, modifyData } from './apiModul.mjs';

// usage
(async () => {
    try {
        // Fetch data
        const breeds = await fetchData('breeds');
        console.log('Breeds:', breeds);

        // Insert breeds into the HTML
        const breedsList = document.getElementById('breedsList');
        breeds.forEach(breed => {
            const listItem = document.createElement('li');
            listItem.innerHTML = breed.name;
            breedsList.appendChild(listItem);
        });

        // Create data
        const newVote = await createData('votes', {
            image_id: 'asf2',
            sub_id: 'user1234',
            value: 1
        });
        console.log('New Vote:', newVote);

        // Update data
        const updatedVote = await updateData('votes/1', {
            value: 0
        });
        console.log('Updated Vote:', updatedVote);

        // Modify data
        const modifiedVote = await modifyData('votes/1', {
            value: 1
        });
        console.log('Modified Vote:', modifiedVote);
    } catch (error) {
        console.error('Error:', error);
    }

    // Setup event listeners
    setupEventListeners();
})();