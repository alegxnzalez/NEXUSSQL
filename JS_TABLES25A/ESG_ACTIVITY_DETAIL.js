// ESG_ACTIVITY_DETAIL.js

window.ESG_ACTIVITY_DETAIL = {
  "tables": {
    "ESG_ACTIVITY_DETAIL": {
      "columns": {
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY",
          "info": "The GID of the ESG Activity. "
        },
        "ACTIVITY_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "ESG Activity Sequence number. "
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Location ID of the Activity Detail. "
        },
        "PROVINCE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Province where Activity Detail is captured. "
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "Province code where the Activity Detail is captured. "
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country Code ID where the Activity Detail is captured. "
        },
        "DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Distance traveled at the Location/Province level for the activity. "
        },
        "DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for distance. "
        },
        "DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Distance in the base unit of measure. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Carried Weight of the Shipment at the Location/Province for the activity. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for weight. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Weight in the base unit of measure. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Carried Volume of the Shipment at the Location/Province for the activity. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for volume. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Volume in the base unit of measure. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "Transport Handling Unit at the Location/Province for the activity. "
        },
        "TRANSPORT_HANDLING_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Count of the Transport Handling Unit at the Location/Province for the activity. "
        },
        "CO2_EMISSION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CO2 emissions at the Location/Province for the activity. "
        },
        "CO2_EMISSION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for CO2 emissions. "
        },
        "CO2_EMISSION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CO2 emissions in the base unit of measure. "
        },
        "CO2_EQ_EMISSION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CO2 equivalent emissions at the Location/Province for the activity. "
        },
        "CO2_EQ_EMISSION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for CO2 equivalent emissions. "
        },
        "CO2_EQ_EMISSION_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CO2 equivalent emissions in the base unit of measure. "
        },
        "ACCESSORIAL_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACCESSORIAL_CODE",
          "info": "Accessorial Code at the Location/Province for the activity. "
        },
        "NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Note for the ESG Activity Details."
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
        "ESG_ACTIVITY_D_EMISSION"
      ]
    }
  }
};
