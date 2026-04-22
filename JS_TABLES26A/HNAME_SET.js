// HNAME_SET.js

window.HNAME_SET = {
  "tables": {
    "HNAME_SET": {
      "columns": {
        "HNAME_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "HNAME_SET_XID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
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
        "HNAME_SET_MEMBER",
        "LANE"
]
    }
  }
};