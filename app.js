function randomImage() {            //Object that stores all the painting images and info
    var images = [
        {
            url: "StarryNight.webp",
            author: "The Starry Night By Vincent Van Gogh",
            description: "Starry Night is one of the most recognized art pieces in the world. Resonating with so many people around the world, it is a testament to its own originality which is timeless and universal. "
        },
        {
            url: "TheBirthofVenusbySandroBotticelli.webp",
            author: "The Birth of Venus by Sandro Botticelli",
            description: "The painting showcases the birth of the goddess Venus, arriving at the base ashore, on the island of Cyprus, conceived in a sea shell she is pushed by the breezes: Zephyr and, maybe, Aura. The goddess is met by a young lady, who is in some cases is recognized as one of the Graces or as the Hora of spring, and she holds out a shroud ready to cover Venus."
        },
        {
            url: "GirlwithaPearlEarring.webp",
            author: "Girl with a Pearl Earring by Johannes Vermeer",
            description: "Vermeer's most well-known painting. Delineates a young lady, looking at her observer, in a yellow-brown dress, wearing an oriental turban, and an unrealistically huge pearl in her ear."
        },
        {
            url: "TheLastSupper.webp",
            author: "The Last Supper by Leonardo da Vinci",
            description: "The Last Supper is a late fifteenth-century Christian painting done by the world renowned Italian artist Leonardo da Vinci. It's housed at the Convent of Santa Maria Delle Grazie in Milan, Italy."
        },
        {
            url: "TheKiss.webp",
            author: "The Kiss by Gustav Klimt",
            description: "The Kiss is a unique oil painting, which includes silver and gold leafs. It was painted between 1907 and 1908 during the time of Klimt's Golden Period"
        },
        {
            url: "LasMeninas.webp",
            author: "Las Meninas by Diego Velázquez",
            description: "Las Meninas is a 1656 painting currently displayed at the Museo del Prado in Madrid. Diego Velázquez, was one of the main artists of the Spanish Golden Age."
        },
        {
            url: "AmericanGothic.webp",
            author: "American Gothic by Grant Wood",
            description: "American Gothic is a 1930 painting housed at the Art Institute of Chicago. Wood was motivated to paint what is currently known as the American Gothic House in Eldon, Iowa."
        },
        {
            url: "ASundayAfternoonontheIslandofLaGrandeJatte.webp",
            author: "A Sunday Afternoon on the Island of La Grande Jatte by Georges Seurat",
            description: "A Sunday Afternoon on the Island of La Grande Jatte was painted in 1884, and is Georges Seurat's most renowned artwork. It brilliantly showcases the pointillist style. Seurat's composition incorporates various Parisians at a park center on the banks of the River Seine."
        },
        {
            url: "Guernica.webp",
            author: "Guernica by Pablo Picasso",
            description: "Guernica is an enormous oil painting that was finished in June 1937. It's presently displayed at the Museo Reina Sofía in Madrid. Parts of the painting where finished in Paris, where Picasso's had a home."
        },
        {
            url: "TheNightWatch.webp",
            author: "The Night Watch by Rembrandt",
            description: "Local army Company of District II, under the Command of Captain Frans Banninck Cocq, otherwise called The Shooting Company of Frans Banning Cocq and Willem van Ruytenburch, is captured in The Night Watch."
        },
        {
            url: "CafeTerraceatNight.webp",
            author: "Café Terrace at Night by Vincent van Gogh",
            description: "Café Terrace at Night is an 1888 oil painting by the famous Dutch artists Vincent van Gogh. It's often called, The Cafe Terrace on the Place du Forum. Furthermore, when it was originally displayed in 1891, it was titled Coffeehouse at Night. "
        },
        {
            url: "WhistlersMother.webp",
            author: "Whistler's Mother by James Abbott McNeill Whistler",
            description: "The Gray and Black No.1, best known under the title of Whistler's Mother, is an oil on canvas painting created by the famous American painter James McNeill Whistler in 1871. The subject of the work is Whistler's mom, Anna McNeill Whistler."
        },
        {
            url: "TheSleepingGypsy.webp",
            author: "The Sleeping Gypsy by Henri Rousseau",
            description: "The Sleeping Gypsy is a 1897 oil painting by the famous French artist Henri Rousseau. It is a fantastical delineation of a lion and a resting gypsy on a twilight night. "
        },
        {
            url: "BaldumoulindelaGalette.webp",
            author: "Bal du moulin de la Galette by Pierre-Auguste Renoir",
            description: "Bal du moulin de la Galette is an 1876 painting by French artist Pierre-Auguste Renoir. It is housed at the Musée d'Orsay in Paris and is one of the most renowned Impressionist pieces. The work of art portrays a sunday evening at the first Moulin de la Galette of Montmartre in Paris."
        },
        {
            url: "ImpressionSunrise.webp",
            author: "Impression, Sunrise by Claude Monet",
            description: "Impression, Sunrise was showcased at what might be considered the first impressionism, known as the Display of the Impressionists in Paris on April 1874. Impression, Sunrise delineates the port of Le Havre, close to Monet's main residency. "
        },
        {
            url: "TheThirdofMay1808.webp",
            author: "The Third of May 1808 by Francisco Goya",
            description: "The Third of May 1808 is a work of art finished on 1814 by the Spanish painter Francisco Goya. The painting is presently at the Museo del Prado, Madrid. In the work, Goya recognizes the Napoleon's armed forces during the killing of 1808 in the Peninsular War."
        },
        {
            url: "LibertyLeadingthePeople.webp",
            author: "Liberty Leading the People by Eugène Delacroix",
            description: "Liberty Leading the People is a work by Eugène Delacroix celebrating the July Revolution of 1830, which toppled King Charles X of France."
        },
        {
            url: "LeDejeunersurlherbe.webp",
            author: "Le Déjeuner sur l’herbe by Édouard Manet",
            description: "Le Déjeuner sur l'herbe – initially titled Le Bain – is an enormous oil on canvas painting by Édouard Manet painted around 1863. It delineates a female bare and two completely dressed men in a provincial setting."
        },
        {
            url: "LadywithanErmine.webp",
            author: "Lady with an Ermine by Leonardo da Vinci",
            description: "Lady with an Ermine is a work of art by Italian artist Leonardo da Vinci from around 1489–1490 and one of Poland's national fortunes. The subject is Cecilia Gallerani, she was the lady of Ludovico Sforza, Duke of Milan, and Leonardo was in the Duke's administration."
        },
        {
            url: "TheRaftoftheMedusa.webp",
            author: "The Raft of the Medusa by Théodore Géricault",
            description: "The Raft of the Medusa – initially titled Scène de Naufrage – is an oil painting by the French Romantic painter and lithographer Théodore Géricault. It was finished when the artist was 27, the work became a symbol of French Romanticism."
        },
        {
            url: "Nighthawks.webp",
            author: "Nighthawks by Edward Hopper",
            description: "Nighthawks is a 1942 oil on canvas painting by Edward Hopper. It depicts individuals in a downtown coffee shop late in the evening, seen through the burger joint's enormous glass window."
        },
        {
            url: "LuncheonoftheBoatingParty.webp",
            author: "Luncheon of the Boating Party by Pierre-Auguste Renoir",
            description: "Luncheon of the Boating Party is a work of art by French impressionist Pierre-Auguste Renoir. It was incorporated into the seventh Impressionist Exhibition in 1882, it was distinguished as the best painting in the show by three critics."
        },
        {
            url: "NapoleonCrossingtheAlps.webp",
            author: "Napoleon Crossing the Alps by Jacques-Louis David",
            description: "Between 1801 and 1805, the French artist Jacques-Louis David painted a series of five oil on canvas horse portraits of Napoleon Bonaparte. The painting, which was commissioned by the King of Spain, depicts a highly romanticized version of Napoleon's actual crossing of the Alps through the Great St Bernard Pass in May 1800. It has become one of Napoleon's most often reprinted photographs."
        },
        {
            url: "ViewofToledo.webp",
            author: "View of Toledo by El Greco",
            description: "View of Toledo is one of the two enduring scenes painted by El Greco. The other, View and Plan of Toledo, is in plain view at the Museo de El Greco in Toledo. "
        },
        {
            url: "TheStormontheSeaofGalilee.webp",
            author: "The Storm on the Sea of Galilee by Rembrandt",
            description: "The Storm on the Sea of Galilee is a 1633 painting by the Dutch Golden Age painter Rembrandt van Rijn. It was beforehand in the Isabella Stewart Gardner Museum in Boston, yet it was stolen in 1990 and stays missing."
        },
        {
            url: "TheHarvesters.webp",
            author: "The Harvesters by Pieter Bruegel the Elder",
            description: "The viewer is transported to a hot summer day in the Netherlands in this piece. It's part of a series commissioned by Niclaes Jongelinck, an Antwerp merchant, for his suburban home. "
        },
        {
            url: "TheArnolfiniPortrait.webp",
            author: "The Arnolfini Portrait by Jan van Eyck",
            description: "Is a 1434 oil painting on wood panel by Jan van Eyck, an Early Netherlandish painter. It is thought to be a fulllength double portrait of Italian businessman Giovanni di Nicolao Arnolfini and his wife, likely in their home in the Flemish city of Bruges."
        },
        {
            url: "TheGardenofEarthlyDelights.webp",
            author: "The Garden of Earthly Delights by Hieronymus Bosch",
            description: "This fantastical triptych is commonly viewed as a far off herald to Surrealism. In truth, it's the statement of a late medieval artist who accepted that God and the Devil, Heaven and Hell were genuine. Of the three scenes delineated, the left board demonstrates Christ showing Eve & Adam."
        }
    ];

    let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("Painting").src = images[randomIndex].url;
    document.getElementById("Painting-Name-Author").innerHTML = images[randomIndex].author;
    document.getElementById("Painting-Description").innerHTML = images[randomIndex].description;
}

function downloadImage() {              //download function
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = document.getElementById('Painting');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'my-image.png';
    link.href = dataUrl;
    link.click();
  }