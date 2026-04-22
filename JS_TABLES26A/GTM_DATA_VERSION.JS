// GTM_DATA_VERSION.js

window.GTM_DATA_VERSION = {
  "tables": {
    "GTM_DATA_VERSION": {
      "columns": {
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_DATA_VERSION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "SOURCE_DATE": {
          "type": "DATE",
          "nullable": false
},
        "LOAD_STATE": {
          "type": "VARCHAR2(20)",
          "nullable": true
},
        "IS_CURRENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "GTM_CONTENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTENT_TYPE"
},
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTENT_SOURCE"
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
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
}
      },
      "fk_tables": [
        "GTM_CLASS_CODE_MAPPING",
        "GTM_DATA_LOAD",
        "GTM_DENIED_PARTY",
        "GTM_PROD_CLASS_CODE",
        "GTM_PROD_CLASS_CODE_PART",
        "GTM_RULES_OF_ORIGIN",
        "GTM_TARIFF_CODE",
        "GTM_TRADE_AGREEMENT"
]
    }
  }
};