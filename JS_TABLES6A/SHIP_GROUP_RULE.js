// SHIP_GROUP_RULE.js

window.SHIP_GROUP_RULE = {
  "tables": {
    "SHIP_GROUP_RULE": {
      "columns": {
        "SHIP_GROUP_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "System generated unique identifier for the record (without the domain) "
        },
        "SHIP_GROUP_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_GROUP_TYPE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_GEO_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_GEO_DEF",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Description to define the record "
        },
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "X_LANE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SHIP_GROUP_CONTENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SHIP_GROUP_CONTENT_DEF",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date this rule expires. "
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date this rule is effective "
        },
        "ITINERARY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITINERARY_PROFILE",
          "info": "GC3 global identifier for the entity.  Created by concatenating Domain Name, \".\" And xid. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "SERVPROV_GID for Trailer Build "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "EQUIPMENT_GROUP_GID for Trailer Build "
        },
        "BREAKBULK_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "Destination LOCATION_GID for Trailer Build "
        },
        "MIN_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum weight for Trailer Build "
        },
        "MIN_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for MIN_WEIGHT column "
        },
        "MIN_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MIN_WEIGHT in base units "
        },
        "MIN_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum volume for Trailer Build "
        },
        "MIN_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for MIN_VOLUME column "
        },
        "MIN_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "MIN_VOLUME in base units "
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
        "SHIP_GROUPS_PER_PERIOD": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The maximum number of shipment groups allowed per selected period "
        },
        "SHIP_GROUPS_PERIOD_LEVEL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "DAY",
            "WEEK",
            "MONTH"
          ],
          "info": "Shipment groups capacity can be defined at DAY, WEEK, MONTH levels "
        },
        "MATCH_SERVICE_PROVIDER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if grouped by same service provider "
        },
        "MATCH_SCHEDULE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if grouped by same service schedule "
        },
        "MATCH_PORT_OF_LOADING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if grouped by same port of loading "
        },
        "MATCH_PORT_OF_DISCHARGE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if grouped by same port of discharge "
        },
        "MATCH_SHIPMENT_INV_PARTY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "If not null indicates if grouped by same Shipment reference num for this qualifier "
        },
        "MATCH_SHIPMENT_REFNUM_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "If not null indicates if grouped by same Shipment reference num for this qualifier "
        },
        "SAME_EQUIPMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if group split based on equipment "
        },
        "MATCH_OR_INV_PARTY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "If not null indicates if split by order release involved party for this qualifier "
        },
        "MATCH_OR_REFNUM_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "If not null indicates if split by order release reference number for this qualifier "
        },
        "MATCH_OR_LINE_REFNUM_QUAL": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ORDER_RELEASE_LINE_REFNUM_QUAL",
          "info": "If not null indicates if split by order release reference number for this qualifier "
        },
        "MATCH_ORDER_SHIPMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if group split based on whether orders are flowing together or not "
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
        "SAME_OR_SOURCE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "SAME_OR_DESTINATION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "VALIDATE_MATCHING_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the rule should be used to validate the shipments before adding them to any of the existing shipment groups associated with this rule. "
        },
        "SHIPMENT_SG_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_REFNUM_QUAL",
          "info": "Indicates the value of the Shipment Group Refnum Qualifier mapped against the Match Shipment Refnum Qualifer defined on the rule. "
        },
        "OR_SG_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_REFNUM_QUAL",
          "info": "Indicates the value of the Shipment Group Refnum Qualifier mapped against the Match Order Release Refnum Qualifer defined on the rule. "
        },
        "ORL_SG_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_GROUP_REFNUM_QUAL",
          "info": "Indicates the value of the Shipment Group Refnum Qualifier mapped against the Match Order Release Line Refnum Qualifer defined on the rule."
        }
      },
      "fk_tables": [
        "SHIP_GROUP",
        "SHIP_GROUP_RULE_INV_PARTY",
        "SHIP_GROUP_SC_DEF"
      ]
    }
  }
};
