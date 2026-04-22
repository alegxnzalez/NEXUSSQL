// X_UPS_ZONEN.js

window.X_UPS_ZONEN = {
  "tables": {
    "X_UPS_ZONEN": {
      "description": "This is a staging table to store the flat file data coming from UPS.",
      "columns": {
        "ORIG_ZIP3_LOW": {
          "type": "VARCHAR2(15)",
          "nullable": false
},
        "ORIG_ZIP3_HIGH": {
          "type": "VARCHAR2(15)",
          "nullable": false
},
        "DEST_ZIP3_LOW": {
          "type": "VARCHAR2(15)",
          "nullable": false
},
        "DEST_ZIP3_HIGH": {
          "type": "VARCHAR2(15)",
          "nullable": false
},
        "RATE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false
},
        "ZONE": {
          "type": "VARCHAR2(10)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};