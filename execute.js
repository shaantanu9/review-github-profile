// this code will be executed when the extension's button is clicked
(function () {
  // get page url
  var url = window.location.href;
  // console.log(url, "url");
  if (!url.startsWith("https://github.com/")) {
    return;
  }
  let URLURL,
    USERNAME,
    SHORTINFO,
    LOCATION,
    WEBSITE,
    TWITTER,
    ORGANIZATIONLIST,
    PINNEDREPOSITPRIESNUMBER,
    PINNEDREPOSITPRIESDESCIPTIONLENGTH,
    LANGUAGE,
    PROFILEREADME,
    ACHIEVEMENT,
    PROFILEREADMELENGTH;
  URLURL = url;
  // get page title
  var title = document.title;
  // console.log(title, "title");
  USERNAME = title.split(" ")[0];

  // =================================================================================================//

  //Get Image URL from page
  // <img style="height:auto;" alt="" width="260" height="260" class="avatar avatar-user width-full border color-bg-default" src="https://avatars.githubusercontent.com/u/33876955?v=4"></img>
  var img = document.querySelector(".avatar-user");
  // console.log(img.src, "img");

  // check image quality
  var img = document.querySelector(".avatar-user");
  var imgUrl = img.src;
  IMGURL = imgUrl;
  // var imgQuality = imgUrl.split("?")[1];
  // console.log(imgQuality, "imgQuality");

  // =================================================================================================//

  // get shortinfo of user from page
  // <div class="p-note user-profile-bio mb-3 js-user-profile-bio f4" data-bio-text="Tech Enthusiast who build clean scalable systems, and Open source Contributor want to build something that impact society in +ve way."><div>Tech Enthusiast who build clean scalable systems, and Open source Contributor want to build something that impact society in +ve way.</div></div>
  var shortinfo = document.querySelector(".p-note");
  if (shortinfo == "") {
    SHORTINFO = "NOT AVAILABLE";
  } else {
    SHORTINFO = shortinfo.innerText;
  }
  // console.log(shortinfo.innerText, "shortinfo");
  // get shortinfo length
  // var shortinfoLength = shortinfo.innerText.length;
  // console.log(shortinfoLength, "shortinfoLength");

  // =================================================================================================//
  // get user follower and followings from page

  var follower = getElementByXpath('//div[@class="mb-3"]/a[1]/span[1]');
  if (follower != null) {
    FOLLOWER = follower.innerText;
  } else {
    FOLLOWER = "NOT AVAILABLE";
  }
  // console.log(follower.innerText, "follower");
  var following = getElementByXpath('//div[@class="mb-3"]/a[2]/span[1]');
  if (following != null) {
    FOLLOWING = following.innerText;
  } else {
    FOLLOWING = "NOT AVAILABLE";
  }
  // console.log(following.innerText, "following");

  // =================================================================================================//

  //get Organization from page
  // //*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[1]

  var organization = getElementByXpath(
    '//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[1]'
  );
  // console.log(organization.innerText, "organization");
  if (organization != null) {
    ORGANIZATION = organization.innerText;
  } else {
    ORGANIZATION = "NOT AVAILABLE";
  }
  // =================================================================================================//

  // get user location from page
  // //*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[2]
  var location = getElementByXpath(
    '//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[2]'
  );
  // console.log(location.innerText, "location");
  if (location != null) {
    LOCATION = location.innerText;
  } else {
    LOCATION = "NOT AVAILABLE";
  }
  // =================================================================================================//

  // get user website from page
  // //*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[3]
  const website = getElementByXpath(
    '//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/ul/li[3]/a/text()'
  );
  // console.log(website, "website");
  if (website != null) {
    WEBSITE = website;
  } else {
    WEBSITE = "NOT AVAILABLE";
  }

  // =================================================================================================//
  // get user email from page
  // document.querySelector("#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.Layout-sidebar > div > div.js-profile-editable-replace > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > ul > li:nth-child(4)")
  const twitter = document.querySelectorAll('[itemprop="twitter"]').innerText;
  console.log(twitter, "twitter2222");
  if (twitter != null) {
    TWITTER = twitter;
    // console.log(TWITTER, "111twitter222");
  } else {
    TWITTER = "NOT AVAILABLE";
  }

  // =================================================================================================//

  // get organization from page
  //*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[6]
  const organization2 = getElementByXpath(
    '//*[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[6]'
  );
  if (organization2 != null) {
    // loop over the xpath and convert to array
    const organizationArray = Array.from(organization2.children);
    organization = organizationArray.shift();
    const organizationNumber = organizationArray.length;
    const organizationArray2 = [];

    organizationArray.map((item, index) => {
      organizationArray2.push(item.ariaLabel);
    });
    // console.log(organizationArray2, "organizationArray2");
    ORGANIZATIONLIST = organizationArray2;
  } else {
    ORGANIZATIONLIST = "NOT AVAILABLE";
  }

  // =================================================================================================//

  // get Pinned Repositories from page
  //*[@id="user-33876955-pinned-items-reorder-form"]/ol
  const pinnedRepositories = getElementByXpath(
    '//*[@id="user-33876955-pinned-items-reorder-form"]/ol'
  );
  // Pinned Repos
  // console.log(pinnedRepositories, "pinnedRepositories1111111");
  if (pinnedRepositories != null) {
    // Convert to array and loop over the xpath
    try {
      var pinnedRepositoriesArray = Array.from(pinnedRepositories.children);
    } catch (error) {}
    const pinnedRepositoriesDescriptionLength = [];
    // console.log(pinnedRepositoriesArray, "firstRepository");

    pinnedRepositoriesArray.map((item, index) => {
      const description = item.innerText;
      pinnedRepositoriesDescriptionLength.push(description.length);
    }).length;
    PINNEDREPOSITPRIESDESCIPTIONLENGTH = pinnedRepositoriesDescriptionLength;
    // console.log(
    //   pinnedRepositoriesDescriptionLength,
    //   "pinnedRepositoriesDescriptionLength"
    // );

    // get pinned repositories number and info length
    const pinnedRepositoriesNumber = pinnedRepositoriesArray.length;
    // console.log(pinnedRepositoriesNumber, "pinnedRepositoriesNumber");
    PINNEDREPOSITPRIESNUMBER = pinnedRepositoriesNumber;
  } else {
    PINNEDREPOSITPRIESDESCIPTIONLENGTH = "NOT AVAILABLE";
  }
  // get items by attribute name itemprop="programmingLanguage"
  let getLanguage = document.querySelectorAll(
    '[itemprop="programmingLanguage"]'
  );
  if (getLanguage != null) {
    // console.log(getLanguage.innerText, "getLanguage");
    let getLanguageArray = [];
    getLanguage.forEach((item) => {
      if (item.innerText !== "") {
        getLanguageArray.push(item.innerText);
      }
    });
    // console.log(getLanguageArray, "getLanguageArray");
    LANGUAGE = getLanguageArray;
  } else {
    LANGUAGE = "NOT AVAILABLE";
  }
  //=================================================================================================//

  // get Profile Readme from page
  // *[@id="js-pjax-container"]/div[2]/div/div[2]/div[2]/div/div[1]/div/article
  const profileReadme = getElementByXpath(
    '//*[@id="js-pjax-container"]/div[2]/div/div[2]/div[2]/div/div[1]/div/article'
  );
  // console.log(profileReadme, "profileReadme");
  if (profileReadme != null) {
    // console.log(profileReadme.innerHTML, "profileReadme");
    // console.log(profileReadme.innerText.length, "profileReadme");
    PROFILEREADME = profileReadme.innerText;
    PROFILEREADMELENGTH = profileReadme.innerText.length;
  } else {
    PROFILEREADME = "NOT AVAILABLE";
    PROFILEREADMELENGTH = 0;
  }
  //=================================================================================================//
  // Get all image tag alt that contains the word "avatar"
  // let getImage = getElementByXpath("//img[contains(@alt,'Achievement')]");
  let getAchievement = document.querySelectorAll(
    "img.achievement-badge-sidebar"
  );
  // console.log(getAchievement, "getAchievement");
  if (getAchievement != null) {
    let getAchievementArray = [];
    getAchievement.forEach((item) => {
      if (item.alt !== "") {
        getAchievementArray.push(item.alt);
      }
    });
    // console.log(getAchievementArray, "getAchievementArray");
    ACHIEVEMENT = getAchievementArray;
  } else {
    ACHIEVEMENT = "NOT AVAILABLE";
  }

  // =================================================================================================//
  // create object with all the data
  let data = {
    URLURL,
    USERNAME,
    SHORTINFO,
    LOCATION,
    WEBSITE,
    TWITTER,
    ORGANIZATIONLIST,
    PINNEDREPOSITPRIESNUMBER,
    PINNEDREPOSITPRIESDESCIPTIONLENGTH,
    LANGUAGE,
    PROFILEREADME,
    ACHIEVEMENT,
    PROFILEREADMELENGTH,
  };

  // console.log(data, "data");
  // Save data to local storage
  (function saveData(data) {
    let stringifyData = JSON.stringify(data);
    console.log(stringifyData, "stringifyData");
    localStorage.setItem(`GithubProfileReview__${USERNAME}`, stringifyData);
    console.log("data Saved");
    data = null;
  })(data);

  // =================================================================================================//
  // Get data using xpath function
  function getElementByXpath(path) {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  }
})();

// =================================================================================================//
// if not null then get the data
function notNull(data) {
  if (data !== null) {
    return data;
  }
}
