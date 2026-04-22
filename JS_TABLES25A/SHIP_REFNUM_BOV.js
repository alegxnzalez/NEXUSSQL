// SHIP_REFNUM_BOV.js

window.SHIP_REFNUM_BOV = {
  "tables": {
    "SHIP_REFNUM_BOV": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "T_ACTUAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "T_WEIGHTED_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": false
        },
        "FREIGHT_TERMS": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "PARENT_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SERVPROV_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_AUTO_MERGE_CONSOLIDATE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "PERSPECTIVE": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "FLIGHT_INSTANCE_ID": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        },
        "SHIPMENT_REFNUM_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SHIPMENT_REFNUM_QUAL_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "SHIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
