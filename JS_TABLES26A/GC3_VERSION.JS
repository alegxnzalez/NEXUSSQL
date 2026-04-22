// GC3_VERSION.js

window.GC3_VERSION = {
  "tables": {
    "GC3_VERSION": {
      "columns": {
        "GC3_VERSION": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "key_value": true
},
        "PATCH_RELEASE": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "STATUS": {
          "type": "VARCHAR2(50)",
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