// FEATURE.js

window.FEATURE = {
  "tables": {
    "FEATURE": {
      "description": "An Oracle Transportation Management Feature for Use Tracking.",
      "columns": {
        "FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The feature GID."
},
        "FEATURE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The feature XID."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "A description of the feature."
},
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the feature can be tracked."
},
        "IS_POLLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If N, feature use is triggered by code. Otherwise, it is triggered solely by data or properties and is polled hourly."
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "R",
                    "H"
          ]
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "FEATURE_ACTION",
        "FEATURE_AGENT_ACTION",
        "FEATURE_FINDER_SET",
        "FEATURE_TOPIC_ALIAS"
]
    }
  }
};