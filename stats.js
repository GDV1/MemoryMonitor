const os = require('os');

setInterval(() => {
    const { freemem, totalmem } = os;

    const totalmemory = parseFloat(totalmem() / 1024 / 1024 / 1024 );
    const freememory = parseFloat(freemem() / 1024 / 1024 / 1024);
    const usage = parseFloat(totalmemory - freememory);
    const percentFree = parseFloat(freememory/totalmemory * 100);
    const percentUse = parseFloat( usage/totalmemory * 100);
    
    const stats = {
        TotalMemory: `${totalmemory} GB`,
        InUse: `${usage} GB`,
        FreeMemory: `${freememory} GB`,
        PercentFree: `${percentFree} %`,
        PercentUse: `${percentUse} %`,
    }
    
    console.clear()
    console.log("===== PC STATS ======")
    console.table(stats);
}, 1000)

