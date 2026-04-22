// DELIVERY_WINDOW_PROFILE.js

window.DELIVERY_WINDOW_PROFILE = {
  "tables": {
    "DELIVERY_WINDOW_PROFILE": {
      "description": "Stores parameters for message consolidation or delivery time window.",
      "columns": {
        "DELIVERY_WINDOW_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "DELIVERY_WINDOW_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TIME_WINDOW_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TIME_WINDOW",
          "info": "delivery time window"
},
        "OFF_TIME_DELIVERY_OPTION": {
          "type": "VARCHAR2(32)",
          "nullable": true,
          "values": [
                    "NONE",
                    "LAST ONE",
                    "ALL"
          ],
          "info": "What to do with messages accumulated during off time; options are deliver 'ALL', 'LAST ONE' per business object, or 'NONE'."
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
        "CONTACT_POINT",
        "NOTIFY_REQUEST"
]
    }
  }
};