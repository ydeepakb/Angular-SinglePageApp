/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
function storeController($scope /*, $routeParam, DataService*/) {
    $scope.myInterval = 3000;
    $scope.slides = [
    {
        image: '../images/comp1.jpg',
    },
    {
        image: '../images/iphone.jpg',
    },
    {
        image: '../images/ipad1.jpg',
    }
    ];
}

function headerController($scope) {
    $scope.topMenus = [{ name: 'Home', link: '_home', icon: '', order: 1 },
                        { name: 'Offers', link: '_offers', icon: '', order: 2 },
                        { name: 'About', link: '_about', icon: '', order: 3 },
                        { name: 'FAQ', link: '_faq', icon: '', order: 4 },
                        { name: 'Contact', link: '_contact', icon: '', order: 5 },
                        { name: 'Login', link: '_login', icon: '', order: 6 }]

    $scope.mobilesMenu = [{
        description: 'Mobiles',
        id: 'm_01',
        link: '_mobile',
        childrens: [{ title: 'Samsung', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Lenovo', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Mi', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'LeEco', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Motorola', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Apple', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Asus', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Micromax', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }]
    }, {
        description: 'Latest Mobiles',
        id: 'm_02',
        link: '_latestMobile',
        childrens: [{ title: 'Samsung j5', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Lenovo vibe', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Mi note 4(63 Gb)', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
        ]
    }, {
        description: 'Mobile Accessories',
        id: 'm_03',
        link: '_latestMobile',
        childrens: [{ title: 'Mobile Cases', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Headphones/Headsets', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Power Banks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Memory Cards', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Cables', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Charger', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Selfie Sticks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
        ]
    }

    ]

    $scope.laptopMenu = [{
        description: 'Laptops',
        id: 'l_01',
        link: '_mobile',
        childrens: [{ title: 'Samsung', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Lenovo', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Mi', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'LeEco', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Motorola', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Apple', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Asus', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Micromax', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }]
    }, {
        description: 'Latest Laptops',
        id: 'l_02',
        link: '_latestMobile',
        childrens: [{ title: 'Samsung j5', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Lenovo vibe', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Mi note 4(63 Gb)', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
        ]
    }, {
        description: 'Laptop Accessories',
        id: 'l_03',
        link: '_latestMobile',
        childrens: [{ title: 'Mobile Cases', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Headphones/Headsets', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Power Banks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Memory Cards', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Cables', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Charger', link: '_samsungMobiles', id: 'm_sm', isdisabled: false },
                    { title: 'Selfie Sticks', link: '_samsungMobiles', id: 'm_sm', isdisabled: false }
        ]
    }

    ]

}

function aboutController($scope) {
    //get data for service call

}

function errorController($scope) {
    //get data for service call
    $scope.errorPageUrl = '../images/404Error.jpg';
}

function loginController($scope) {

}

function aboutusController($scope) {
    $scope.aboutUsText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu vulputate velit. Curabitur faucibus sem risus, in commodo dui posuere eget. Duis augue nunc, maximus vitae posuere in, sollicitudin a mauris. Duis elementum ultrices tortor rutrum condimentum. Sed hendrerit orci imperdiet, vehicula diam nec, tristique tortor. Donec vitae velit vehicula, suscipit massa non, volutpat risus. Praesent in erat quis quam ornare euismod. Vestibulum aliquam sit amet sapien nec egestas. Donec a felis eget est consectetur eleifend id id dolor. Nullam accumsan varius libero ut feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus venenatis blandit neque, in ornare ipsum molestie sed. In aliquet massa leo, ac gravida ipsum lobortis vel.' +
    'Praesent posuere dapibus quam scelerisque vehicula. Nunc sed dapibus elit. Praesent placerat felis bibendum sem dapibus, vitae blandit felis porta. Aenean convallis elit sapien, quis lacinia ex cursus id. Morbi maximus mauris nec nunc dapibus hendrerit. Sed cursus est diam, in ultrices diam tempor ut. Nunc nec neque lorem. Donec id ante magna. Donec suscipit ipsum facilisis lorem gravida egestas. Donec ornare justo quis odio commodo maximus eu vitae libero. Etiam sed neque ac magna ornare malesuada. Nam in lacinia libero. Fusce id semper turpis, ac vestibulum nulla. Cras lobortis rutrum justo, in varius justo fringilla non. Sed ornare arcu id lacus pulvinar lacinia. Pellentesque facilisis sed sem quis efficitur.' +
    'Integer hendrerit porttitor tempus. Cras sit amet nibh nisi. Suspendisse a eros lectus. Vivamus nec lorem et ante porta placerat. In maximus feugiat nisi, quis gravida nisl ultricies ac. Mauris suscipit, sapien nec consequat tincidunt, lorem quam hendrerit magna, at volutpat diam erat a nisl. Fusce ac sapien ac enim convallis consequat. Aliquam luctus rhoncus risus id vulputate. Donec euismod rhoncus ligula. Sed scelerisque, diam id consequat viverra, justo tellus accumsan quam, a pharetra elit ligula condimentum nisl.' +
    'Suspendisse et lorem feugiat, sagittis enim quis, eleifend massa. Vivamus faucibus velit nec consequat gravida. Donec sagittis, lorem sed suscipit interdum, diam ligula condimentum ante, ac convallis dui est gravida nibh. Etiam rhoncus lorem eget purus rhoncus mollis. Vestibulum tempus erat a finibus placerat. Curabitur eu ipsum tincidunt, venenatis ex in, faucibus massa. Donec tincidunt, elit sed posuere feugiat, purus dui malesuada nisl, quis interdum dolor risus a mi. Pellentesque pulvinar, tortor a dapibus sollicitudin, felis augue sagittis elit, non finibus diam felis sollicitudin nisi.';
}

function faqController($scope) {
    $scope.FAQDetails = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            answer:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Aenean consequat lorem ut felis ullamcorper?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Aenean consequat lorem ut felis ullamcorper?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }, {
            question: 'Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus?',
            answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
        }
    ]
}

function contactController($scope) {

}

function offerController($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [{
        description: 'set1', imageList: [
        {
            image: '../images/laptops/acer-aspire-notebook.jpeg',
            name: 'acer-aspire-notebook'
        },
        {
            image: '../images/laptops/apple-macbook-air-ultrabook.jpeg',
            name: 'apple-macbook-air-ultrabook'
        },
        {
            image: '../images/laptops/dell-inspiron-15-notebook-original.jpeg',
            name: 'dell-inspiron-15-notebook-original'
        }]
    },
    {
        description: 'set2', imageList: [
        {
            image: '../images/laptops/dell-inspiron-2-in-1-laptop.jpeg',
            name: 'dell-inspiron-2-in-1-laptop'
        },
        {
            image: '../images/laptops/hp-notebook-original.jpeg',
            name: 'hp-notebook-original'
        },
        {
            image: '../images/laptops/hp-notebook.jpeg',
            name: 'hp-notebook'
        }]
    },
    {
        description: 'set3', imageList: [
        {
            image: '../images/laptops/hp-pavilion-notebook.jpeg',
            name: 'hp-pavilion-notebook'
        },
        {
            image: '../images/laptops/lenovo-notebook-original.jpeg',
            name: 'lenovo-notebook-original'
        },
        {
            image: '../images/laptops/micromax-lt.jpeg',
            name: 'micromax-lt'
        }]
    }
    ];
}