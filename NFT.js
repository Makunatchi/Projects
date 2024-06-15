// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
    // Create an NFT object with the provided metadata
    const nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    // Store the NFT object in the nfts array
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Year: ${nft.year}`);
        console.log(`Description: ${nft.description}`);
        console.log('-------------------');
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs: ${nfts.length}`);
}

// Call your functions below this line

// Mint a few NFTs
mintNFT("Sunset Bliss", "Alice Johnson", 2023, "A beautiful sunset over the ocean.");
mintNFT("Mountain Majesty", "Bob Smith", 2024, "A majestic mountain range covered in snow.");
mintNFT("City Lights", "Carol White", 2022, "A bustling city illuminated by street lights.");

// List all NFTs
listNFTs();

// Print the total number of NFTs
getTotalSupply();
