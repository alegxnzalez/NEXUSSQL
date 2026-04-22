// GTM_CONSTRAINT_SET_TYPE.js

window.GTM_CONSTRAINT_SET_TYPE = {
  "tables": {
    "GTM_CONSTRAINT_SET_TYPE": {
      "columns": {
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
        "GTM_CONSTRAINT_SET_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GTM_CONSTRAINT_SET_TYPE_GID contains the unique identifier for the Constraint Set Type"
},
        "GTM_CONSTRAINT_SET_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GTM_CONSTRAINT_SET_TYPE_XID contains the unique external identifier for the Constraint Set Type"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Description of the Constraint Set Type"
},
        "IS_MATCH_TYPE_VISIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "IS_MATCH_TYPE_VISIBLE is used to control the display of Match Type field in Gtm Constraint Set."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translation GID"
}
      },
      "fk_tables": [
        "GTM_CONSTRAINT_SET",
        "GTM_CSET_TYPE_C_TYPE_MAP"
]
    }
  }
};