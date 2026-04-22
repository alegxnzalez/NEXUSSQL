function startManualTour() {
    if (!window.driver) {
        console.error("Driver.js is not loaded.");
        return;
    }

    const { driver } = window.driver.js;

    // Fix corrupted queries from previous test iterations
    let existingStr = localStorage.getItem('nexus_saved_queries');
    if (existingStr && (existingStr.includes('"query":') || existingStr.includes('mock-12345'))) {
        localStorage.removeItem('nexus_saved_queries');
        if (typeof window.loadSavedQueries === 'function') window.loadSavedQueries();
        existingStr = null;
    }

    if (!existingStr || existingStr === '[]') {
        const mockQuery = [{
            id: 1234567890,
            name: 'Shipment Lookup',
            description: 'Example query to demonstrate dynamic variables ($)',
            sql: 'SELECT * FROM SHIPMENT WHERE SHIPMENT_GID = $GID',
            color: 'emerald',
            date: new Date().toISOString()
        }];
        localStorage.setItem('nexus_saved_queries', JSON.stringify(mockQuery));
        if (typeof window.loadSavedQueries === 'function') window.loadSavedQueries();
    }

    const prefillData = () => {
        try {
            // Simulate an actual human click on the DOM element so ALL internal handlers kick in correctly.
            const listContainer = document.getElementById('table-list');
            if (listContainer) {
                let clicked = false;
                for (let i = 0; i < listContainer.children.length; i++) {
                    const child = listContainer.children[i];
                    if (child.textContent.trim().includes('ACCESSORIAL_CODE')) {
                        child.click();
                        clicked = true;
                        break;
                    }
                }

                // Fallback click on the first table if ACCESSORIAL_CODE isn't found for any reason
                if (!clicked && listContainer.children.length > 0) {
                    listContainer.children[0].click();
                }
            }

            // Populate SQL Editor with a join query
            if (window.codeMirrorEditor) {
                window.codeMirrorEditor.setValue('SELECT * \nFROM ACCESSORIAL_CODE ac\nJOIN ACCESSORIAL_COST acst ON ac.ACCESSORIAL_CODE_GID = acst.ACCESSORIAL_CODE_GID');
            }
        } catch (e) {
            console.log("Could not prefill mock data", e);
        }
    };

    const populateErd = () => {
        try {
            window.switchView('erd');
            if (typeof window.visualizeSqlInErd === 'function') {
                //window.visualizeSqlInErd();
            }
        } catch (e) {
            console.log("Could not prefill ERD", e);
        }
    };

    const triggerExploreReachable = () => {
        try {
            const btn = document.getElementById('explore-main-btn');
            if (btn) btn.click();
        } catch (e) { }
    };

    const triggerAvailablePaths = () => {
        try {
            // Find the first destination in the explore list and click it
            const exploreList = document.getElementById('explore-list');
            if (exploreList && exploreList.children.length > 0) {
                const firstChild = exploreList.children[0];
                if (firstChild) firstChild.click();
            }
        } catch (e) { }
    };

    const selectMockQuery = () => {
        window.switchView('saved');
        setTimeout(() => {
            const listContainer = document.getElementById('saved-queries-list');
            if (listContainer && listContainer.children.length > 0) {
                // Trigger native click on the first mock query card
                listContainer.children[0].click();
            } else if (typeof window.loadQueryPreview === 'function') {
                window.loadQueryPreview('mock-12345');
            }
        }, 300);
    };

    const driverObj = driver({
        showProgress: true,
        animate: true,
        allowClose: true,
        nextBtnText: 'Next &rarr;',
        prevBtnText: '&larr; Prev',
        doneBtnText: 'Done',
        popoverClass: 'nexus-driver-theme',
        steps: [
            {
                popover: {
                    title: 'Welcome to NexusSQL',
                    description: 'Let us take a quick tour of the system to help you navigate efficiently through the Data Dictionary and Interactive ERD features.',
                    align: 'center'
                },
                onHighlightStarted: () => {
                    // Try to make sure we are at home first to show the version selector
                    if (typeof window.goHome === 'function') window.goHome();
                }
            },
            {
                element: '#otm-version-selector',
                popover: {
                    title: 'Data Source Version',
                    description: 'Start by selecting your OTM environment version. This will dynamically load the corresponding database catalog structure into the application.',
                    side: "bottom",
                    align: 'start'
                }
            },

            // --- DICTIONARY ---
            {
                element: '#search-tables',
                popover: { title: 'Filter tables', description: 'Filter the catalog to quickly find specific OTM tables.', side: "right", align: "start" },
                onHighlightStarted: () => { prefillData(); }
            },
            {
                element: '#search-columns',
                popover: { title: 'Search column', description: 'Search across all tables simultaneously to find exactly where a column is used.', side: "right", align: "start" }
            },
            {
                element: '#table-list',
                popover: { title: 'Table List', description: 'Select any table from this list to populate its information in the Dictionary view.', side: "right", align: "start" }
            },
            {
                element: '#master-checkbox',
                popover: { title: 'Column Selection', description: 'Use this to select or deselect all columns at once for bulk actions.', side: "right", align: "center" },
                onHighlightStarted: () => { window.switchView('dictionary'); }
            },
            {
                element: '#download-csv-btn',
                popover: { title: 'Download CSV Template', description: 'Get a clean CSV template structure with headers specifically sized for OTM CSV imports.', side: "bottom", align: "start" }
            },
            {
                element: '#copy-cols-btn',
                popover: { title: 'Copy Columns', description: 'Puts all your currently selected column names directly into your clipboard.', side: "bottom", align: "start" }
            },
            {
                element: '#download-table-btn',
                popover: { title: 'Download Table', description: 'Export the complete data dictionary table offline into an Excel file.', side: "bottom", align: "start" }
            },
            {
                element: '#referral-sidebar',
                popover: { title: 'Incoming References', description: 'This panel reveals what other tables exist upstream by pointing to the current table via Foreign Keys.', side: "left", align: "start" }
            },

            // --- ERD ---
            {
                element: '#view-erd-btn',
                popover: { title: 'Interactive ERD', description: 'Switch to the spatial canvas.', side: "bottom", align: "start" },
                onHighlightStarted: () => { window.switchView('erd'); }
            },
            {
                element: '#explore-main-btn',
                popover: { title: 'Explore connections', description: 'Discover paths starting from the current focal table natively finding downstream destinations.', side: "left", align: "center" },
                onHighlightStarted: () => { populateErd(); }
            },
            {
                element: '#explore-sidebar',
                popover: { title: 'Reachable Destinations', description: 'Displays all possible endpoints recursively connected from the focal table.', side: "right", align: "start" },
                onHighlightStarted: () => { triggerExploreReachable(); }
            },
            {
                element: '#paths-sidebar',
                popover: { title: 'Available Paths', description: 'Understand the specific sequence of exact JOINs needed to reach any destination.', side: "left", align: "start" },
                onHighlightStarted: () => { triggerAvailablePaths(); }
            },
            {
                element: '#send-to-sql-btn',
                popover: { title: 'Sent to SQL', description: 'Brings all your mapped connections directly back into the SQL engine.', side: "left", align: "center" }
            },

            // --- SQL GENERATOR ---
            {
                element: '#view-sql-btn',
                popover: { title: 'SQL Generator', description: 'Open the code environment.', side: "bottom", align: "start" },
                onHighlightStarted: () => { window.switchView('sql'); }
            },
            {
                element: '#sql-editor-container',
                popover: { title: 'Drag and drop functionality', description: 'Edit your SQL manually, or pick and drag column caps right from the sidebar onto the text editor.', side: "left", align: "center" },
                onHighlightStarted: () => { window.switchView('sql'); }
            },
            {
                element: 'button[onclick="visualizeSqlInErd()"]',
                popover: { title: 'Visualize in ERD', description: 'Take any arbitrary SELECT/JOIN statement and generate an ERD canvas representing its joins instantly.', side: "bottom", align: "start" }
            },
            {
                element: 'button[onclick="shareSQLQuery()"]',
                popover: { title: 'Share Link', description: 'Generates a copyable Base64 encoded URL containing everything inside the Editor to share with peers.', side: "bottom", align: "start" }
            },
            {
                element: '.h-14.bg-\\[\\#1c2128\\] button[onclick="openIdConverter()"]',
                popover: { title: 'ID Formatter', description: 'Convert an Excel column of texts right into normalized SQL format items for "IN(...)" blocks.', side: "bottom", align: "start" }
            },
            {
                element: 'button[onclick="openSaveQueryModal()"]',
                popover: { title: 'Saved Query', description: 'Archive your custom scripts immediately with variables, labels, and colors.', side: "bottom", align: "start" }
            },

            // --- SAVED QUERIES ---
            {
                element: '#view-saved-btn',
                popover: { title: 'Saved Queries', description: 'Access your persistent query archives.', side: "bottom", align: "start" },
                onHighlightStarted: () => { window.switchView('saved'); }
            },
            {
                element: '#search-saved-queries',
                popover: { title: 'Find a query', description: 'Filter your private query collection internally using text combinations.', side: "right", align: "start" },
                onHighlightStarted: () => { selectMockQuery(); }
            },
            {
                element: '#saved-query-variables-container',
                popover: { title: 'Query variables', description: 'Try evaluating the $GID variable now! The system constructs dynamic inputs out of raw query text automatically.', side: "left", align: "start" }
            },
            {
                element: '#saved-query-variables-container button[onclick="openIdConverter()"]',
                popover: { title: 'ID Formatter', description: 'Use the formatter directly to inject massive arrays of IDs straight into your variables!', side: "bottom", align: "start" }
            }
        ]
    });

    driverObj.drive();
}

window.startManualTour = startManualTour;

document.addEventListener('DOMContentLoaded', () => {
    // Check if the user has completed the v12 tour before
    const tourCompleted = localStorage.getItem('nexusSqlTourCompleted_v12');

    if (!tourCompleted) {
        setTimeout(() => {
            startManualTour();
            localStorage.setItem('nexusSqlTourCompleted_v12', 'true');
        }, 800);
    }
});
