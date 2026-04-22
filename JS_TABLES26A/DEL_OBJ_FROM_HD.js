// DEL_OBJ_FROM_HD.js

window.DEL_OBJ_FROM_HD = {
  "tables": {
    "DEL_OBJ_FROM_HD": {
      "description": "This tables holds the GIDs of those objects loaded to HD but were subsequently User Deleted in the OTM OLTP. These GIDs will then be Soft Deleted in HD.",
      "columns": {
        "DEL_OBJ_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "OBJ_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "OBJ_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "OBJ_TYPE": {
          "type": "VARCHAR2(50)",
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
      "fk_tables": []
    }
  }
};