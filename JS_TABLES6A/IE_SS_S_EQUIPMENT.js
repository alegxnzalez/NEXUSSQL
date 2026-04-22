// IE_SS_S_EQUIPMENT.js

window.IE_SS_S_EQUIPMENT = {
  "tables": {
    "IE_SS_S_EQUIPMENT": {
      "columns": {
        "I_REC_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The record number primary key identifier for the tracking event specified. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment equipment of the tracking event. "
        },
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The shipment equipment GID linking an equipment record to the shipment. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The equipment initial is a mark that is registered with national or international authorities that is associated with a specific owner. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Number identifying the equipment used. "
        },
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The Equipment Initial Number field is a concatenation of equipment initial and equipment number. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "An equipment type is a category of equipment. Oracle Transportation Management uses equipment types when it determines equipment capacity. "
        },
        "INTERMODAL_EQUIPMENT_LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The reported length of the equipment in the tracking event. "
        },
        "TARE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The tare weight recorded on the tracking event for the shipment equipment. "
        },
        "TARE_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The tare weight in the base unit of measure. "
        },
        "TARE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The tare weight unit of measure. "
        },
        "SCALE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The received volume recorded on the tracking event for the shipment ship unit. "
        },
        "SCALE_LOCATION": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The scale location recorded for the tracking event. "
        },
        "SCALE_TICKET": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "Sequence ID printed on the scale ticket when weight is recorded. "
        },
        "SCALE_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The scale weight recorded on the tracking event for the shipment equipment. "
        },
        "SCALE_WEIGHT_UOM_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The scale weight in the base unit of measure. "
        },
        "SCALE_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The scale weight unit of measure. "
        },
        "WEIGHT_QUALIFIER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "E",
            "G",
            "N"
          ],
          "info": "The type of weight that is represented by the scale weight; Estimate, Net, or Gross weight. E = Estimated, G = Gross, N = Net "
        },
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT",
          "info": "The equipment GID if the equipment is an asset managed in OTM. "
        },
        "EQUIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_REFNUM_QUAL",
          "info": "The equipment reference number qualifier to identify an equipment entity for a tracking event. "
        },
        "EQUIPMENT_REFNUM_VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The equipment reference value associated with the equipment reference number qualifier. "
        },
        "CHASSIS_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The chassis initial is a mark that is registered with national or international authorities that is associated with a specific owner "
        },
        "CHASSIS_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Number identifying the used in conjunction with the equipment on the tracking event. "
        },
        "CHASSIS_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The Chassis Initial Number field is a concatenation of chassis initial and chassis number. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "S_EQUIPMENT_INDEX": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The standing order of the equipment on the shipment "
        },
        "AAR_CAR_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "The AAR car type associated with the rail equipment on the tracking event."
        }
      },
      "fk_tables": []
    }
  }
};
