(function() {
    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool.',
            author: 'emmetio',
            url: 'https://atom.io/packages/emet',
            downloads: 3738870,
            stars: 2880,
            selector: 'p1'
        },
        {
            name: 'git-blame',
            description: 'Toggle git-blame annotations in the gutter of atom editor.',
            author: 'alexcorre',
            url: 'https://atom.io/packages/git-blame',
            downloads: 268700,
            stars: 450,
            selector: 'p2'
        },
        {
            name: 'linter',
            description: 'A base linter with cow powers',
            author: 'steelbrain',
            url: 'https://atom.io/packages/linter',
            downloads: 8064392,
            stars: 4684,
            selector: 'p3'
        }
    ];

    function Package(data)
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function()
        {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function()
        {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function()
    {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id)
    {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package)
    {
        var selector = package.selector,
            nameEl = getEl(selector + "-name"),
            descEl = getEl(selector + "-description"),
            authEl = getEl(selector + "-author"),
            downloadEl = getEl(selector + "-downloads"),
            starsEl = getEl(selector + "-stars")

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var gitblame = new Package(data[1]);
    writePackageInfo(gitblame);

    var linter = new Package(data[2]);
    writePackageInfo(linter);
}());