//header shadow

const pageHeader = document.querySelector('.header');

addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        pageHeader.classList.replace('not-floating','float');
    } else {
        pageHeader.classList.replace('float','not-floating');
    }
});

//show pages

const pageNames = ['intro','causes','effects','solutions','about'];

const pageInfo = [
    [
        {
            title: 'Wat',
            paragraph: [
                "What is climate change, you may ask? It's when the climate cha-",
                "It's when greenhouse gasses in the atmosphere increase the temperature of earth globally. It has been steadily increasing for the past few decades. Think about, let's say 4 years. Saw snow? Blizzards? Yup. But not anymore! Nowadays around the year 2024 there are about 1-2 small snow days. Winters are getting less cold, and summers are getting hot.",
                "It takes about 100 ppm to raise the average temperature by 1 degree celsius. These degrees will add up, and will cause environments to collapse.",
                "Visit the other tabs to find more information!"
            ],
            image: 'global-warming.jpg',
            caption: 'an exaggeration of global warming'
        }
    ],[
        {
            title: 'Greenhouse Gasses',
            paragraph: [
                "These do not only include carbon dioxide. There is also methane (CO4), nitrous oxide (N2O), and CFCS."
            ],
            image: 'earth.png',
            caption: 'the earth. you cannot see the greenhouse gasses, but they are there.'
        },{
            title: 'Carbon Dioxide',
            paragraph: [
                "Everywhere in living things! Supports life, and all that stuff. However, massive amounts of it will affect the climate negatively. This influx of carbon dioxide can come from burning any natural thing. When plants or trees most commonly are burned, that reduces the amount of carbon dioxide taken in, and releases carbon dioxide. Fossil fuels is a category that includes natural gas, coal, and oil. These can also release carbon dioxide when burnt, since it is made of dead plants from millions of years ago. This is the largest source of carbon dioxide, but sadly also the largest for energy."
            ],
            image: 'the-commercial-appeal.webp',
            caption: 'smokestacks... producing smoke. a lot of smoke.'
        },{
            title: 'Methane',
            paragraph: [
                "Not to be overshadowed by carbon dioxide, this comes from livestock and landfills. Livestock accounts for about 10% of methane emissions, however it is actually 30x more harmful than carbon dioxide. Landfills also release methane, and also contaminates groundwater."
            ],
            image: 'cow.jpg',
            caption: 'a cow. it burps methane. more specificly, 26-132 gallons of it. every day too.'
        },{
            title: 'Nitrous Oxide',
            paragraph: [
                "This comes from fertilizer, and is 300x more powerful than carbon dioxide. This is also called laughing gas, and makes you calmer. Not too harmful if you don't overdose it. (it's lethal if you do.) It is also used as an anesthetic in medical stuff."
            ],
            image: 'fertilizer.jpeg',
            caption: 'the #1 source of nitrous oxide: fertilizer.'
        },{
            title: 'Chlorofluorocarbons',
            paragraph: [
                "Also named CFC-12, this is used as a refrigerant. These are kept safe inside refrigerators and air conditioners, but people throw them into landfills carefree, and these have an effect 10,000x more powerful than carbon dioxide."
            ],
            image: 'air-conditioner.webp',
            caption: "doesn't leak CFCs yet. it will when it gets landfilled."
        }
    ],[
        {
            title: 'Sudden Climate Change',
            paragraph: [
                "Greenhouse gasses cause global warming, which affects everyone. The higher temperatures cause most catastrophes on earth.",
                "The climate in ecosystems would rapidly change, causing them to not have enough time to adapt, leadking to them migrating or just dying.",
                "When already hot ecosystems get hotter, they are overcome with desertification, leading to infertile, loose, and dry soil. These places would also experience lower rainfall, and droughts.",
                "Humans, especially babies and the elderly will suffer from the extreme weather."
            ],
            image: 'desert.jpg',
            caption: 'a desert. parts of the world could become like this if the earth gets hotter.'
        },{
            title: 'New Grounds for Insects',
            paragraph: [
                "Insects like mosquitoes would be more of a problem in usually cool areas, and they can be problematic when they transmit diseases.",
                ""
            ],
            image: 'rainforest.jpg',
            caption: 'the amazon rainforest. home to many mosquito species.'
        },{
            title: 'Melting Ice',
            paragraph: [
                "Ice at the poles would melt and cause the sea level to rise, destroying coastal ecosystems.",
                "Sea ice cover a large amount of places like Greenland, and they keep the earth cooler by reflecting light. Now that they are melted, they cannot reflect that energy, leading to hotter tempuratures."
            ],
            image: 'glacier.jpg',
            caption: 'glaciers, gone and melted if climate change continues.'
        }
    ],[
        {
            title: 'Carbon Tax',
            paragraph: [
                "Giving an extra tax on fossil fuels, this discourages companies that emit a threshold of carbon dioxide when producing their products. This has actually lowered some of coal usage, but not so much of the other fuels."
            ],
            image: 'country-emissions.png',
            caption: "a lot of emissions for us compared to the entire continent of asia."
        },{
            title: 'Renewable Energy',
            paragraph: [
                "Wind, solar, hydro, thermal, etc. Renewable energy is energy that can be renew-",
                "Renewable energy can be replenished in a short amount of time.",
                "This transition would be massive, since the US is so dependent on oil and such."
            ],
            image: 'renewable-energy.webp',
            caption: "a surreal landscape of windmills in the horizon, and solar panels closer up."
        },{
            title: 'Self Sustaining Cities',
            paragraph: [
                "Cities that can produce their own goods can minimize pollution, so that goods do not need to be imported, which takes fuel, and also time."
            ],
            image: 'self-sufficient-city.webp',
            caption: "a city in china, it sustains itself. you can probably see that there are greenhouses."
        },{
            title: 'CO2 Capture and Sequestration',
            paragraph: [
                "Out of sight, out of mind! Except it actually works, kind of. It takes CO2 from the atmosphere, and hides it deep underground, and rocks there will absorb it, not letting it out. However this is not cheap. (as you can tell from the image.)"
            ],
            image: 'css.jpg',
            caption: "a cool looking building, also from china. name is very close to css, cascading style sheets."
        },{
            title: 'Reusing and Recycling',
            paragraph: [
                "We all know this, don’t overbuy, try to use old things if they’re still functional. Stats say that recycling paper takes 70% less energy, 40% less water. Less stuff getting burnt is better because that carbon is not being released into the atmosphere."
            ],
            image: 'recycling.jpg',
            caption: "seperated public recycling bins. this would make recycling different materials easier."
        },
    ],[
        {
            title: 'About',
            paragraph: [
                "All HTML, JS and CSS by Marcus Lin, June 6th, 2024",
                "This website is made for a science project called The Climate Catastrophe, meant to use media to raise awareness to and show information about climate change, as seen in the other pages.",
                "This is not a real website. Rather, just a local file.",
                "Sources",
                "Font 'Product Sans' by Google.",
                "+ A lot of images I did not bother to source here."
            ],
            image: 'about.png',
            caption: "a small portion of js. over 500 lines of code in total. took around ~15 hours."
        }
    ]
];

//Sets up almost everything, lol. way bigger than i began with.

//cycles for each page
window.onload = pageInfo.forEach((element, index) => {
    const masterPage = document.querySelector('.pages');
    const sectionIndex = index;
    
    //create page to append everything
    if (document.querySelector(`.page-${pageNames[index]}`) === null) {
        const page = document.createElement('div');
        page.setAttribute('class',`page-${pageNames[index]} hidden`);
        masterPage.appendChild(page);
    }
    
    //header button
    const header = document.querySelector('.header');
    const headerTab = document.createElement('button');
    headerTab.setAttribute('class',`button-${pageNames[index]} page-selected`);
    headerTab.setAttribute('type','button');
    headerTab.innerHTML = pageNames[index];

    header.appendChild(headerTab);

    //append sections to page
    const page = document.querySelector(`.page-${pageNames[index]}`);

    const pageSection = document.createElement('div');
    pageSection.setAttribute('class','page-section');

    if (index < 4) {
        const pageTitle = document.createElement('span');
        pageTitle.setAttribute('class','page-title');
        pageTitle.innerHTML =  pageNames[index][0].toUpperCase() + pageNames[index].substring(1,10);
        page.appendChild(pageTitle);
    }
    
    page.appendChild(pageSection);  

    //cycles for each section/paragraph in page
    element.forEach((element, index) => {
        //append paragraphs
        const pageName = pageNames[sectionIndex];

        const paragraphSection = document.createElement('div');
        paragraphSection.setAttribute('class','paragraph-section');

        //append images alternating from left and right
        //append image to the left if odd
        if (index % 2 === 0) appendImage();

        //append paragraph text and title to text section 
        const paragraphText = document.createElement('div');
        paragraphText.setAttribute('class','paragraph-text');

        const paragraphTitle = document.createElement('span');
        paragraphTitle.setAttribute('class','paragraph-title');
        paragraphTitle.setAttribute('id',`${pageName}-${index}`);
        paragraphTitle.innerHTML = element.title;
        paragraphText.appendChild(paragraphTitle);

        element.paragraph.forEach(element => {
            const paragraph = document.createElement('span');
            paragraph.setAttribute('class','paragraph');
            paragraph.innerHTML = element;
            paragraphText.appendChild(paragraph);
        });

        //append the paragraph to the section
        paragraphSection.appendChild(paragraphText);

        //append image to the right if even
        if (index % 2 === 1) appendImage();

        //append paragraph section to page
        const page = document.querySelector(`.page-${pageName} .page-section`);
        page.appendChild(paragraphSection);

        function appendImage() {
            if (element.image === undefined) {
                return;
            }
            const imageContainer = document.createElement('div');
            imageContainer.setAttribute('class','paragraph-image-div');

            const imageCaption = document.createElement('span');
            imageCaption.setAttribute('class','paragraph-image-caption');
            if (element.caption === '' || element.caption == undefined  ) {
                imageCaption.innerHTML = "no caption? :'(";
            } else {
                imageCaption.innerHTML = element.caption;
            }

            const image = document.createElement('img');
            image.setAttribute('src',`assets/${element.image}`);
            image.setAttribute('alt',element.img);
            image.setAttribute('class','paragraph-image');

            imageContainer.appendChild(image);
            imageContainer.appendChild(imageCaption);

            paragraphSection.appendChild(imageContainer);
        }
    });
});

pageNames.forEach(element => {
    document.querySelector(`.button-${element}`)
    .addEventListener('click', () => changeToPage(element));
});

function changeToPage(page) {
    //go back to top when switching pages
    window.scrollTo(0, 0);

    //update page navigation
    const chapterNavigation = document.querySelector('.chapter-navigation');
    if (page === 'intro' || page === 'about') {
        chapterNavigation.classList.replace('shown','hidden');
    } else {
        chapterNavigation.classList.replace('hidden','shown');
        //delete chapters from nav
        while (chapterNavigation.hasChildNodes()) {
            chapterNavigation.firstChild.remove();
        }

        //append chapters to nav
        const title = document.createElement('span');
        title.innerHTML = 'Navigation';
        chapterNavigation.appendChild(title);

        pageInfo[pageNames.indexOf(page)].forEach((element, index) => {
            const chapter = document.createElement('a');
            chapter.setAttribute('href',`#${page}-${index}`);
            chapter.innerHTML = element.title;
            chapterNavigation.appendChild(chapter);
        });
    }

    //show buttons has selected page
    pageNames.forEach((element, index) => {
        const pageElement = document.querySelector(`.page-${element}`);
        const pageButton = document.querySelector(`.button-${element}`);
        if (page === pageNames[index]) {
            pageElement.classList.replace('hidden','shown');
            pageButton.classList.replace('page-notselected','page-selected');
        } else {
            pageElement.classList.replace('shown','hidden');
            pageButton.classList.replace('page-selected','page-notselected');
        }
    });
}

changeToPage('intro');


/*
Page DOM

Goal: rename DOM to make it a little more better.

<div>
    <div class="pages">
        <div class="page-specific">
            <div class="page-section">
                <div class="text-section => para-section-text">
                    <span class="paragraph-title">
                    <span class="paragraph-text">
                <div class="paragraph-image-div => para-section-image">
                    <img class="paragraph-image> 
                    <span class="paragraph-image-caption">
*/