// FEATURE_TOPIC_ALIAS.js

window.FEATURE_TOPIC_ALIAS = {
  "tables": {
    "FEATURE_TOPIC_ALIAS": {
      "description": "An process control action associated with a feature.",
      "columns": {
        "FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "FEATURE",
          "info": "The feature GID."
},
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TOPIC_ALIAS",
          "info": "The topic alias GID."
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
      "fk_tables": []
    }
  }
};