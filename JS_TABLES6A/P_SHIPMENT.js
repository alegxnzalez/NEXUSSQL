// P_SHIPMENT.js

window.P_SHIPMENT = {
  "tables": {
    "P_SHIPMENT": {
      "columns": {
        "P_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "P_SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "RATE_X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE"
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "first stop "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "last stop "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "start time at first stop "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "end time at last stop "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "gross weight "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "gross volume "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "NUM_STOPS": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "total number of stops on the shipment "
        },
        "COST": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "does not include accessorials "
        },
        "COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY"
        },
        "COST_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TRANSPORT_MODE"
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP"
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV"
        },
        "IS_GC3_SHIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y if this shipment came from gc3, N otherwise "
        },
        "DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COMMODITY",
          "info": "Commodity for shipment (only one allowed) "
        },
        "SHIPMENT_CATEGORY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Optional user-defined shipment category text. "
        },
        "SOURCE_PORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
        },
        "DEST_PORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION"
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
        },
        "AVG_ACTIVITY_TIME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "AVG_ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "AVG_ACTIVITY_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "SHIPUNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PICK_UP_STOPS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "DELIVERY_STOPS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OUT_ROUTE_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OUT_ROUTE_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OUT_ROUTE_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "EQUIPMENT_GROUP_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Identifies the p_shipments that can be purged with the next purge schedule"
        }
      },
      "fk_tables": [
        "CR_LV_AGGREGATE_P_SHIPMENT",
        "LANE_SUMMARY_CELL_D",
        "P_SHIPMENT_ARB_LANE",
        "P_SHIPMENT_SET_D",
        "P_S_SHIP_UNIT"
      ]
    }
  }
};
