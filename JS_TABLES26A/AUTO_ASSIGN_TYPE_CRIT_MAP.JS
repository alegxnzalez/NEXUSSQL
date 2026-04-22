// AUTO_ASSIGN_TYPE_CRIT_MAP.js

window.AUTO_ASSIGN_TYPE_CRIT_MAP = {
  "tables": {
    "AUTO_ASSIGN_TYPE_CRIT_MAP": {
      "description": "Maps the criteria that may be used for each auto assign type",
      "columns": {
        "AUTO_ASSIGN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_TYPE",
          "info": "Id for the auto assign type such as SHIPMENT_INVOLVED_PARTY"
},
        "AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_CRITERIA",
          "info": "Id for the criteria that may be used for the given auto assign type"
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AUTO_ASSIGN_RULE_CRITERIA"
]
    }
  }
};