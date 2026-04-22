// ITINERARY_PROFILE.js

window.ITINERARY_PROFILE = {
  "tables": {
    "ITINERARY_PROFILE": {
      "columns": {
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ITINERARY_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ITINERARY_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "CONSOL",
        "ITINERARY_PROFILE_D",
        "LNM_PROJECT",
        "LNM_SCENARIO",
        "LOGISTICS_GUIDE_AGGREGATE_DATA",
        "LOGISTICS_GUIDE_DETAIL",
        "ORDER_RELEASE",
        "SECONDARY_CHARGE_RULE",
        "SHIP_GROUP_RULE"
]
    }
  }
};