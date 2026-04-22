// X_VOY_LOC_MAP.js

window.X_VOY_LOC_MAP = {
  "tables": {
    "X_VOY_LOC_MAP": {
      "columns": {
        "VOY_LOCATION_ID": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "Voyage location id. "
        },
        "DATA_SOURCE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "key_value": true,
          "info": "Designates source of data. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "Location"
        }
      },
      "fk_tables": []
    }
  }
};
