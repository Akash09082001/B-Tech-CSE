
const applyNow = () => {
    // Replace these values with your actual campaign data
    const lpurl = "https://admission.isu.ac.in/bachelor-of-technology-application-form/";
    const utmSource = getParameterByName('utm_source') || 'default_source';
    const utmMedium = getParameterByName('utm_medium') || 'default_medium';
    const utmCampaignName = getParameterByName('utm_campaign') || 'default_campaign';
    const adgroupId = getParameterByName('utm_adgroupid') || 'default_adgroupid';
    const keyword = getParameterByName('utm_keyword') || 'default_keyword';
    const campaignid = getParameterByName('utm_campaignid') || 'default_campaignid';
    const network = getParameterByName('utm_network') || 'default_network';
    const device = getParameterByName('utm_device') || 'default_device';
    const matchtype = getParameterByName('utm_matchtype') || 'default_matchtype';

    // Construct the UTM parameters URL
    const utmParameters = `?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaignName}&utm_adgroupid=${adgroupId}&utm_keyword=${keyword}&utm_term=${keyword}&utm_campaignid=${campaignid}&utm_network=${network}&utm_device=${device}&utm_matchtype=${matchtype}`;

    // Build the final URL
    const finalUrl = `${lpurl}${utmParameters}`;

    // Redirect the user to the final URL
    window.location.href = finalUrl;
};

const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[[]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

