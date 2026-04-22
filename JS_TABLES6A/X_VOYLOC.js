// X_VOYLOC.js

window.X_VOYLOC = {
  "tables": {
    "X_VOYLOC": {
      "columns": {
        "VOYAGE_ID": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "SEQUENCE": {
          "type": "VARCHAR2(40)",
          "nullable": true
        },
        "LOCATION": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "DEPARTURE_OR_ARRIVAL": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "DEPARTURE_ARRIVAL_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "DATA_SOURCE": {
          "type": "VARCHAR2(10)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
