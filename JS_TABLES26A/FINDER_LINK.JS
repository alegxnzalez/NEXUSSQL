// FINDER_LINK.js

window.FINDER_LINK = {
  "tables": {
    "FINDER_LINK": {
      "columns": {
        "FINDER_LINK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "FINDER_LINK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "FINDER_LINK_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "LINK_CLASS": {
          "type": "VARCHAR2(512)",
          "nullable": false
},
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "foreign_key": "QUERY_TABLE"
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
      "fk_tables": []
    }
  }
};