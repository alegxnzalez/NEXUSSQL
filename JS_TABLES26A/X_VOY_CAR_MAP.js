// X_VOY_CAR_MAP.js

window.X_VOY_CAR_MAP = {
  "tables": {
    "X_VOY_CAR_MAP": {
      "columns": {
        "VOY_SERVPROV_ID": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "Voyage Location ID."
},
        "DATA_SOURCE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "info": "Designates source of data."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SERVPROV",
          "info": "Service provider."
}
      },
      "fk_tables": []
    }
  }
};