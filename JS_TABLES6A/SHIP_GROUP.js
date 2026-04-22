// SHIP_GROUP.js

window.SHIP_GROUP = {
  "tables": {
    "SHIP_GROUP": {
      "columns": {
        "SHIP_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "System generated unique identifier for the record (without the domain) "
        },
        "SHIP_GROUP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_GROUP_TYPE",
          "info": "GGC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_RULE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true
        },
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "EQUIPMENT_GROUP_GID for Trailer Build "
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total weight of all the shipments in the shipment group "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for TOTAL_WEIGHT column "
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_WEIGHT in base units "
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total volume of all the shipments in the shipment group "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for TOTAL_VOLUME column "
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_VOLUME in base units "
        },
        "NUMBER_OF_SHIPMENTS": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Total number of shipments in the shipment group "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "The service provider for the trailer build.  If the ship_group was created from a ship_group_rule, the service provider will be copied into the ship_group from the rule. "
        },
        "PICKUP_TRANSACTION_NO": {
          "type": "NUMBER(10)",
          "nullable": true
        },
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the shipment group. "
        },
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the shipment group. "
        },
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the shipment group. "
        },
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the shipment group. "
        },
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the shipment group. "
        },
        "APPOINTMENT_PRIORITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APPOINTMENT_PRIORITY",
          "info": "shipment group appointment priority used for dock scheduling priority feature "
        },
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A boolean field.  When it is set to \"Y\", this row and its child data will be purged. "
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
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
        },
        "VOYAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Voyage ID with which the shipment group was created using a shipment group rule having Match Schedule as true. "
        },
        "PORT_OF_LOAD_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Port of loading ID with which shipment group was created using a shipment group rule having Match Port of loading as true. "
        },
        "PORT_OF_DIS_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Port of discharge ID with which the shipment group was created using a shipment group rule having Match Port of discharge as true. "
        },
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Equipment ID with which the shipment group was created using a shipment group rule having Same Equipment as true. "
        },
        "OR_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Source Location ID with which the shipment group was created using a shipment group rule having Same Order Source as true. "
        },
        "OR_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Destination Location ID with which shipment group was created using a shipment group rule having Same Order Destination as true."
        }
      },
      "fk_tables": [
        "SG_EVENT_GROUP",
        "SG_STATUS_HISTORY",
        "SHIPMENT",
        "SHIP_GROUP_D",
        "SHIP_GROUP_D_OR",
        "SHIP_GROUP_INVOLVED_PARTY",
        "SHIP_GROUP_REFNUM",
        "SHIP_GROUP_REMARK",
        "SHIP_GROUP_STATUS",
        "SHIP_GROUP_TR_EVENT_CONTACT"
      ]
    }
  }
};
