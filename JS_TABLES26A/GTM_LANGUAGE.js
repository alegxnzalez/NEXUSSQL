// GTM_LANGUAGE.js

window.GTM_LANGUAGE = {
  "tables": {
    "GTM_LANGUAGE": {
      "description": "Language in IANA tags as defined in IETF RFC 4646",
      "columns": {
        "GTM_LANGUAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_LANGUAGE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LANGUAGE_NAME": {
          "type": "VARCHAR2(32)",
          "nullable": false
},
        "IANA_TAG": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ISO_639_1_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": false
},
        "NATIVE_NAME": {
          "type": "VARCHAR2(32)",
          "nullable": true
},
        "STOP_WORDS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
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
        "GTM_ITEM_DESCRIPTION",
        "GTM_OBJECT_DESCRIPTION",
        "GTM_PROD_CLASS_CODE_DESC",
        "GTM_PROD_CLASS_CODE_NOTES",
        "GTM_PROD_CLASS_CODE_PART_DESC",
        "GTM_ROO_PSR_DESCRIPTION",
        "GTM_ROO_RULE_CODE_DESC"
]
    }
  }
};