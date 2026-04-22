// X_VOYAGE.js

window.X_VOYAGE = {
  "tables": {
    "X_VOYAGE": {
      "columns": {
        "VOYAGE_ID": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "Voyage ID. "
        },
        "SERVPROV": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Service Provider. "
        },
        "SERVICE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Service Level. "
        },
        "VESSEL_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Vessel Name. "
        },
        "VOYAGE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Voyage Name. "
        },
        "DEPARTURE_REGION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Departure region. "
        },
        "ARRIVAL_REGION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Arrival region. "
        },
        "PRIMARY_DEPARTURE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Primary departure date. "
        },
        "DATA_SOURCE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "info": "Designates source of data."
        }
      },
      "fk_tables": []
    }
  }
};
