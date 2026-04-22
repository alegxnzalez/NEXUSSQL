// STOPS_INFO_BOV.js

window.STOPS_INFO_BOV = {
  "tables": {
    "STOPS_INFO_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "STOP_NUM": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "CONTACT_NAME": {
          "type": "VARCHAR2(301)",
          "nullable": true
        },
        "PHONE": {
          "type": "VARCHAR2(80)",
          "nullable": true
        },
        "PARTY_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true
        },
        "ADDRESS1": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "ADDRESS2": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "ADDRESS3": {
          "type": "VARCHAR2(239)",
          "nullable": true
        },
        "UNIT": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "COUNTRY": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "ARRIVAL_DATE": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "ARRIVAL_TIME": {
          "type": "VARCHAR2(8)",
          "nullable": true
        },
        "DEPARTURE_DATE": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "DEPARTURE_TIME": {
          "type": "VARCHAR2(8)",
          "nullable": true
        },
        "CARRIER_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
