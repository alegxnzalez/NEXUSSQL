// USER_APPDATA.js

window.USER_APPDATA = {
  "tables": {
    "USER_APPDATA": {
      "description": "This table is used to store the user preferences. The preferences are stored as a Key/Value pair. For e.g., the user may want to see all weights in Lbs., Time Zone as EST, etc.",
      "columns": {
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GL_USER",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "KEY": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "key_value": true
},
        "APPDATA_SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true
},
        "VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": false
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
      "fk_tables": []
    }
  }
};