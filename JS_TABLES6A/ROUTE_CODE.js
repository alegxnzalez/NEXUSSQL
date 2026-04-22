// ROUTE_CODE.js

window.ROUTE_CODE = {
  "tables": {
    "ROUTE_CODE": {
      "columns": {
        "ROUTE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ROUTE_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "ROUTE_CODE_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "ORIG_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ORIG_STATION_PROVINCE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ORIG_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "ORIG_STATION_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ORIG_STATION_SPLC": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "DEST_STATION_CITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "DEST_STATION_PROVINCE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "DEST_STATION_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "DEST_STATION_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DEST_STATION_SPLC": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "RAIL_RETURN_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Empty rail car location gid. "
        },
        "RAIL_RETURN_ROUTE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ROUTE_CODE",
          "info": "Empty rail car route code. "
        },
        "BORDER_CROSSING_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "This is the location of a rail border crossing."
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
      "fk_tables": [
        "LOGISTICS_GUIDE_DETAIL",
        "ORDER_RELEASE",
        "RATE_GEO",
        "ROUTE_CODE",
        "ROUTE_CODE_COMBINATION",
        "ROUTE_CODE_COMBINATION_D",
        "ROUTE_CODE_D",
        "ROUTE_CODE_PROFILE_D",
        "RO_LANE_SPECIAL_SERVICE",
        "SHIPMENT",
        "SHIPMENT_STOP"
      ]
    }
  }
};
