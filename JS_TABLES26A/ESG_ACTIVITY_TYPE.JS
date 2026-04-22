// ESG_ACTIVITY_TYPE.js

window.ESG_ACTIVITY_TYPE = {
  "tables": {
    "ESG_ACTIVITY_TYPE": {
      "description": "This table is added to define the ESG (Environment, Social and Governance) Activity Type.",
      "columns": {
        "ESG_ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID of ESG Activity Type."
},
        "ESG_ACTIVITY_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID of the ESG Activity Type."
},
        "ESG_ACTIVITY_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Name of the ESG Activity Type."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description for the ESG Activity Type."
},
        "EXTERNAL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "External Code referring to the ESG Activity Type"
},
        "SCOPE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "1",
                    "2",
                    "3"
          ],
          "info": "Scope of the ESG Activity Type. Valid Values are '1','2','3'"
},
        "HAS_EMISSIONS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Denotes whether the ESG Activity type has emissions or not."
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
        "ESG_ACTIVITY",
        "ESG_ACTIVITY_RULE",
        "ESG_ACT_TYPE_ATTRIBUTE",
        "ESG_ACT_TYPE_EMISSION"
]
    }
  }
};