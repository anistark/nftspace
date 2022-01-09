// Marketplace Page

let nftItemDiv = '<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" id="nft-0"><a href="#"><img class="nft-item hover:grow hover:shadow-lg" id="nft-item-img" src="imgplaceholder"><div class="pt-3 flex items-center justify-between"><p class="">Husky Art</p></div><p class="pt-1 text-gray-900 nft-owner" id="owner-0-address">Available</p></a></div>';

// TODO: Add an editor to input abi.
let huskyArtAbi = '';
loadJSON(
	'../../contracts/huskyart/abi.json',
	function(data) {
		huskyArtAbi = data;
	},
	function(xhr) {
		console.error(xhr);
	}
);

// TODO: Add an editor to input contract address.
let huskyArtContractAddress = '0xBB78A18a080619293474fe41F9193D4A6932B08F';

$(function() {
    console.log( "ready!" );

    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try{
            window.ethereum.enable();
            window.huskyArtContract = new web3.eth.Contract(huskyArtAbi, huskyArtContractAddress);
			console.log('window.huskyArtContract:', window.huskyArtContract);
        } catch (error) {
            console.log('error:', error);
        }
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    fetchNFTData();
});

function fetchNFTData() {
    let owner = {}
    for (let i = 0; i < 4; i++) {
        // console.log('Fetching NFT Details... for tokenId', i);
        owner[i] = window.huskyArtContract.methods.ownerOf(i).call(function (err, res) {
            if(err) {
                console.log('Err while calling web3 method:', err);
            } else {
                console.log('res of #', i, ':', res);
                $('#owner-'+i+'-address').text(res);

				window.huskyArtContract.methods.tokenURI(i).call(function (imgErr, imgRes) {
					$('#marketplace-container').append(nftItemDiv.replace("Available", res).replace("imgplaceholder", imgRes));
				});
            }
        });
        // console.log('Owner of #', i, ':', owner[i]);
    }
}

$('#btn-nft-mint').click(function () {
	console.log('Minting in progress...');
	mintNFT();
})

function mintNFT() {
	window.huskyArtContract.methods.safeMint().send({from:window.ethereum.selectedAddress}, function (err, res) {
		console.log('mint res:', err, res);
	});
}

$('#nft-item-img').click(function () {
	transferNFT("address", id);
})

function transferNFT(address, id) {
	window.huskyArtContract.methods.safeTransferFrom().send({from:window.ethereum.selectedAddress, to:address, tokenId:id}, function (err, res) {
		console.log('mint res:', err, res);
	});
}
