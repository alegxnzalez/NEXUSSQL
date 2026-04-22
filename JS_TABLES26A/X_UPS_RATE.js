// X_UPS_RATE.js

window.X_UPS_RATE = {
  "tables": {
    "X_UPS_RATE": {
      "description": "This is a staging table to store the flat file data coming from UPS.",
      "columns": {
        "RATE_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false
},
        "WEIGHT_NOT_TO_EXCEED": {
          "type": "NUMBER",
          "nullable": false
},
        "ZONE": {
          "type": "VARCHAR2(10)",
          "nullable": false
},
        "COST": {
          "type": "NUMBER",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};