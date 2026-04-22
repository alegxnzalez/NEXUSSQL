// GTM_DATA_LOAD_TYPE.js

window.GTM_DATA_LOAD_TYPE = {
  "tables": {
    "GTM_DATA_LOAD_TYPE": {
      "description": "Specifies the type of data load.",
      "columns": {
        "GTM_DATA_LOAD_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_DATA_LOAD_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DATA_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": true
},
        "SOURCE": {
          "type": "VARCHAR2(32)",
          "nullable": true
},
        "LOAD_PROC_TYPE": {
          "type": "VARCHAR2(9)",
          "nullable": true,
          "values": [
                    "JAVA",
                    "PLSQL",
                    "SQLLOADER"
          ]
},
        "LOAD_PROC_DETAIL": {
          "type": "VARCHAR2(1000)",
          "nullable": true
},
        "SAVE_ORIG_FILE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
}
      },
      "fk_tables": [
        "GTM_DATA_LOAD",
        "GTM_DATA_LOAD_TYPE_FILE"
]
    }
  }
};