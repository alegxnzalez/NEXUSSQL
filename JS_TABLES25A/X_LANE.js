// X_LANE.js

window.X_LANE = {
  "tables": {
    "X_LANE": {
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A unique identifier to define the X lanes in the GC3. The gid contains the domain portion. The X-Lane is the user interface in GC3 to define all the lanes. "
        },
        "X_LANE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "SOURCE_CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The city of the source portion of the location. "
        },
        "SOURCE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The state code for teh source portion of the X-Lane. "
        },
        "SOURCE_POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The zip code of the source location portion of the X-Lane. "
        },
        "SOURCE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "A pointer to the three digit country code for teh source portion of the X-Lane. "
        },
        "SOURCE_ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the source location portion of the X-Lane. "
        },
        "SOURCE_ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the source location portion of the X-Lane. "
        },
        "SOURCE_ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the source location portion of the X-Lane. "
        },
        "SOURCE_ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the source location portion of the X-Lane. "
        },
        "SOURCE_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "DEST_CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The city of the destination portion of the location. "
        },
        "DEST_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The state code for the destination portion of the X-Lane. "
        },
        "DEST_POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "The zip code of the destination location portion of the X-Lane. "
        },
        "DEST_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "A pointer to the three digit country code for the destination portion of the X-Lane. "
        },
        "DEST_ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the destination location portion of the X-Lane. "
        },
        "DEST_ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the destination location portion of the X-Lane. "
        },
        "DEST_ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the destination location portion of the X-Lane. "
        },
        "DEST_ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The Zones for the destination location portion of the X-Lane. "
        },
        "DEST_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SOURCE_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "A unique identifier to define the region code for the source portion of the X-Lane. This is a way to define the X-Lane from a region to another region (or any combination) "
        },
        "DEST_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REGION",
          "info": "A unique identifier to define the region code for the destination portion of the X-Lane. This is a way to define the X-Lane from a region to another region (or any combination) "
        },
        "CONSTRAINT_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSTRAINT_SET"
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PLANNING_PARAMETER_SET"
        },
        "SOURCE_RAIL_SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPLC",
          "info": "The Rail Splc for the source location portion of the X-Lane. "
        },
        "DEST_RAIL_SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPLC",
          "info": "The Rail Splc for the destination location portion of the X-Lane. "
        },
        "SOURCE_RAIL_STATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATION_CODE",
          "info": "The Rail Station Code for the source location portion of the X-Lane. "
        },
        "DEST_RAIL_STATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATION_CODE",
          "info": "The Rail Station Code for the destination location portion of the X-Lane."
        },
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_RULE_SET"
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
        "AUTO_SEC_RES_PROFILE_LANE_JOIN",
        "CAPACITY_COMMITMENT",
        "CAPACITY_COMMITMENT_ALLOC",
        "CAPACITY_LIMIT",
        "CAPACITY_USAGE",
        "CM_RULE",
        "DEPOT_PROFILE_D",
        "DISTANCE_LOOKUP",
        "EQUIP_GROUP_AVG_TA_DURATION",
        "IM_MILEAGE",
        "ITINERARY",
        "LANE",
        "LANE_ATTRIBUTE",
        "LANE_CALENDAR",
        "LANE_REMARK",
        "LANE_SUMMARY_STAT",
        "LANE_TENDER_INFO",
        "ORDER_ROUTING_RULE_D",
        "ORDER_SCHEDULE",
        "P_BID",
        "P_LANE_ACCESSORIAL_DURATION",
        "P_LANE_ATTRIBUTES",
        "P_LANE_BUSINESSUNIT",
        "P_LANE_CUSTOMER",
        "P_SHIPMENT",
        "P_SHIPMENT_ARB_LANE",
        "RATE_GEO",
        "RATE_PREFERENCE",
        "RATE_SERVICE_ACCESSORIAL_TIME",
        "RATE_ZONE_PROFILE_D",
        "RO_LANE_SPECIAL_SERVICE",
        "RUSH_HOUR",
        "SECONDARY_CHARGE_RULE",
        "SERVICE_TIME",
        "SHIP_GROUP_RULE",
        "UNITIZATION_RULE"
      ]
    }
  }
};
