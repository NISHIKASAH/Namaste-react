const resdata = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83649",
        title: "Biryani",
        description:
          "Taste these delectable classics, delectable biryanis to make your day.",
        imageId:
          "v1674029961/PC_Creative%20refresh/3D_bau/collections_new/Biriyani.png",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani,layout_cuisine_biryani,ads_pc_biryani,biryani",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "4 restaurants",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance (Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "Delivery Time",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost: Low to High",
          },
          {
            key: "costForTwoDesc",
            title: "Cost: High to Low",
          },
        ],
        restaurantCount: 4,
        facetList: [
          {
            label: "Veg/Non-veg",
            id: "isVeg",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Non Veg",
                id: "isVegfacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
          },
          {
            label: "Cost for two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Rs. 300-Rs. 600",
                id: "costForTwofacetquery3",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery5",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            top: 20,
            right: 16,
            bottom: 16,
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "658210",
          name: "The Fusion Lounge",
          cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
          locality: "Triloki nagar",
          areaName: "Chhindwara City",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "South Indian",
            "Chinese",
            "Beverages",
            "Fast Food",
            "Desserts",
          ],
          avgRating: 4.4,
          parentId: "395453",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          promoted: true,
          adTrackingId:
            "cid=11861827~p=1~eid=0000018e-5771-a244-1274-d4d100ec0148~srvts=1710864048708~83649",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "9.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-03-19 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=658210&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "234875",
          name: "Adil Hotel",
          cloudinaryImageId: "lln3zxpll8pshaeqrgr9",
          locality: "Rautha Wada",
          areaName: "Chhindwara Locality",
          costForTwo: "₹150 for two",
          cuisines: ["North Indian", "Biryani", "Tandoor"],
          avgRating: 4.3,
          parentId: "27123",
          avgRatingString: "4.3",
          totalRatingsString: "500+",
          promoted: true,
          adTrackingId:
            "cid=11861753~p=2~eid=0000018e-5771-a244-1274-d4d200ec0264~srvts=1710864048708~83649",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 10.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "10.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-03-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=234875&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "151656",
          name: "Dev International",
          cloudinaryImageId: "fyubs4fywivonmhbv8zw",
          locality: "khajri road",
          areaName: "Mohan Nagar",
          costForTwo: "₹100 for two",
          cuisines: ["North Indian", "Chinese", "Fast Food", "Beverages"],
          avgRating: 4.3,
          parentId: "71556",
          avgRatingString: "4.3",
          totalRatingsString: "100+",
          promoted: true,
          adTrackingId:
            "cid=11861724~p=3~eid=0000018e-5771-a244-1274-d4d300ec0344~srvts=1710864048708~83649",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 11.5,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "11.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-03-19 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=151656&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "630193",
          name: "Champaran  Handi Restaurant",
          cloudinaryImageId: "24e1ad862638cc0b73a7b66c2d98832b",
          locality: "Sinchai Colony",
          areaName: "Chhindwara Locality",
          costForTwo: "₹200 for two",
          cuisines: ["Indian", "North Indian", "Biryani"],
          avgRating: 3.9,
          parentId: "376324",
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "8.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-03-19 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=630193&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
